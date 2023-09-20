const { ObjectId } = require("mongodb");

class ContactService {
    constructor(client) {
        this.Contact = client.db().collection("contacts");
    }
    // đinh nghia cac phuong thuc truy xuat CSDL su dung mongodb API
}

module.exports = ContactService;