const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { getUsersHandler } = require('../services/handlers/get-users-handler');
const { expect } = chai;

chai.use(sinonChai);

describe('get-users-handler.js', () => {
    let req;
    let res;
    let sandbox;
    describe('getUserHandler()', () => {
        before(() => {
            req = {
                session: {}
            };
            res = {
                render: () => ({})
            };

            sandbox = sinon.createSandbox();
        });

        afterEach(() => {
            sandbox.restore();
        });

        it('should render the people page', async () => {
            sandbox.stub(res, 'render').returns({});
            res.locals = {};
            await getUsersHandler(req, res);
            expect(res.render).to.have.been.calledOnceWith('people.html');
        });
    });
});
