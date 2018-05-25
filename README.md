# Temporary Repo For Auditing (Open Source) Tokens

- [Initial Submission 2018-05-23](https://github.com/ramyhardan/tmp-tokenaudit/tree/submission/20180523.0)

## Changes
- Cleaned up token code and commented out call to external contract (`approveAndCall` is same as `approve` now).
- Added basic test case for approving and transfering tokens.

## Run Tests
1. `npm install -g truffle` (assuming truffle 4.x)
1. Check out this repo and `cd` into it.
1. `npm install`
1. `npm test`

## Recommendation
Use https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/token/ERC20/CappedToken.sol instead!
