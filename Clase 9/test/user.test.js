const expect = require('chai').expect;
const proxyquire = require('proxyquire');
const Promise = require('bluebird');

const myAxios = {
    get: function(userId) {
        return Promise.resolve({id: 2, name: 'Jon Snow'});
    } // TODO: Arreglar mock para que funcione getAll tambien
};

const User = proxyquire('../models/User.js', {'axios': myAxios});

describe('User', function () {
    describe('#getAll', function () {
        it('should fetch all users', function (done) {
            User.getAll()
                .then( users => {
                    expect(users.data).to.have.lengthOf(3);
                    users.data.forEach(u => {
                        expect(u).to.have.property('name');
                    });
                    done();
                });
        });
    });

    describe('#findOne', function () {
        it('should fetch one user', function (done) {
            User.findOne(2)
                .then( user => {
                    expect(user.id).to.be.equal(2);
                    expect(user.name).to.be.equal('Jon Snow');
                    done();
                });
        });
    });
});
