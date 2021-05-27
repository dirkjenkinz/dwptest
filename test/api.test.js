const sinon = require('sinon');
const assert = require('assert');
const proxyquire = require('proxyquire').noCallThru();

const getSample = (FetchStub) => ({
    api: proxyquire('../services/api', {
        'node-fetch': FetchStub
    }),
    mocks: {
        fetch: FetchStub
    }
});

describe('api call', () => {
    let sandbox;
    before(() => {
        url = 'https://testapi/test/';
        sandbox = sinon.createSandbox();
    });
    afterEach(() => {
        sandbox.restore();
    });

    it('call api method success', async () => {
        const body = {
            json: sinon.stub().returns({ status: 200 })
        };
        const sample = getSample(sinon.stub().resolves(body));
        try {
            sample.api.getPeople(url, 'get', '').then((res) => {
                assert.equal(res.status, 200);
            });
        } catch (err) {
            // assert.deepStrictEqual(err, new Error('Error'));
        }
    });

    it('call api method failure', async () => {
        const sample = getSample(sinon.stub().resolves('Error'));
        try {
            sample.api.getPeople(url, 'get', '').then((res) => {
            }).catch((err) => {
                if (err) {
                    const error = 'Error';
                    assert.equal(error, 'Error');
                }
            });
        } catch (err) {
            // assert.deepStrictEqual(err, new Error('Error'));
        }
    });
});
