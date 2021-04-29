import Nedb from 'nedb/browser-version/out/nedb.min';

const promisify = (fn) => (...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

class NedbStorage {
  constructor(db) {
    this.db = {};
    const methods = ['find', 'findOne', 'insert', 'update', 'remove'];
    methods.forEach(
      (method) => (this.db[method] = promisify(db[method].bind(db))),
    );
  }
  async find(filter = {}) {
    return await this.db.find(filter);
  }
  async insert(track) {
    return await this.db.insert(track);
  }
  async update(id, track) {
    return await this.db.update({ _id: id }, track, {
      returnUpdatedDocs: true,
    });
  }
  async remove(id) {
    return await this.db.remove({ _id: id });
  }
}

export class PlaylistsAppStorage extends NedbStorage {
  constructor(name) {
    super(new Nedb({ filename: `${name}.nedb`, autoload: true }));
  }

  async fill(list) {
    await this.db.remove({});
    for (let data of list) {
      await this.insert({ ...data, _id: data.id });
    }
  }

  async getAll() {
    const items = await this.find({});
    for (let item of items) {
      item.id = item._id;
      delete item._id;
    }
    return items;
  }

  async add(item) {
    const newItem = await this.insert(item);
    newItem.id = newItem._id;
    delete newItem._id;
    return newItem;
  }

  async modify(item) {
    return await this.update(item.id, item);
  }

  async delete(item) {
    return this.remove(item.id);
  }
}
