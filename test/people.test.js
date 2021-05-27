const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { getPeopleHandler } = require('../services/handlers/get-people-handler');
const { expect } = chai;

chai.use(sinonChai);

describe('get-people-handler.js', () => {
    let req;
    let res;
    let sandbox;
    describe('getPeopleHandler()', () => {
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
            await getPeopleHandler(req, res);
            expect(res.render).to.have.been.calledOnceWith('people.html');
        });
    });
});
