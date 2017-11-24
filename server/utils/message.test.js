const expect = require('expect');

const { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const testMessage = {
            from: 'Bartek',
            text: 'Hello'
        };
        const test = generateMessage(testMessage.from, testMessage.text);

        // expect(test.from).toBe(testMessage.from);
        // expect(test.text).toBe(testMessage.text);
        // ***** or
        expect(test).toInclude({
            from: testMessage.from,
            text: testMessage.text
        });

        expect(test.createdAt).toBeA('number');
        }
    )
});