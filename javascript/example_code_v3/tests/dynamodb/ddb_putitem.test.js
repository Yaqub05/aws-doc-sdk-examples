process.argv.push('--arg1', 'us-west-2');
process.argv.push('--arg2', 'TABLE_NAME');
const mockPutItem = jest.fn();
jest.mock('@aws-sdk/client-dynamodb/commands/PutItemCommand', () => ({
    DynamoDB: function DynamoDB() {
        this.PutItemCommand = mockPutItem
    }
}));
const {params, run} = require("../../dynamodb/ddb_putitem");

//test function
test("has to mock db#putItem",  async (done) => {
    await run();
    expect(mockPutItem).toHaveBeenCalled;
    done();
});
