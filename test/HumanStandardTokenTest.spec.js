const Token = artifacts.require("./HumanStandardToken.sol");
const chai = require("chai");

const tokenSupply = 1000;

describe("HumanStandardToken", () => {
    contract("fresh contract: happy paths", (accounts) => {
        it("should allow transfer of previously approved tokens", async () => {
            const senderAddress = accounts[0]; // contract creator, owns all tokens
            const approvedAddress = accounts[1];
            const recipientAddress = approvedAddress;
            const tokensApproved = 10;
            const tokensTransfered = 3;

            const token = await Token.deployed();
            await token.approve(approvedAddress, tokensApproved, {from: senderAddress});
            await token.transferFrom(senderAddress, recipientAddress, tokensTransfered, {from: approvedAddress});

            const balanceSender = await token.balanceOf(senderAddress);
            const balanceRecipient = await token.balanceOf(recipientAddress);

            chai.expect(balanceSender.toNumber()).to.equal(tokenSupply - tokensTransfered);
            chai.expect(balanceRecipient.toNumber()).to.equal(tokensTransfered);
        });
    });
});
