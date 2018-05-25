# Temporary Repo For Auditing (Open Source) Tokens

## Initial Submission 2017-05-23
Token code is outdated and was taken from https://github.com/ConsenSys/Token-Factory/tree/master/contracts
### Issues
- No compiler version specified.
- Implicit function visibilty (`public`). Make explicit for clarity!
- Deprecated `constant` keyword used. Use `view` instead (or `pure` if it applies)!
- Missing `emit` when emitting events.
- Use `revert()` instead of `throw` in fallback function!
- Inconsistent code formatting.
- Use of `if` within functions instead of `require` preconditions adds complexity. Use `require` where possible!
- No way to increase/decrease allowance in one transaction without risking https://docs.google.com/document/d/1YLPtQxZu1UAvO9cZ1O2RPXBbT0mooh4DYKjA_jp-RLM/edit Now requires
  1. Reset of previous approval to 0
  1. Wait for that transaction to be mined
  1. Set new approval
- May be vulnerable to underflow/overflow attacks if supply is not capped
- Code from `approve` duplicated in `approveAndCall`. Call `approve` instead!
- Fragile self-built call in [HumanStandardToken](contracts/HumanStandardToken.sol#57). Why do this in the first place? What's the called function supposed to do? Import the contract's interface instead!

## Recommendation
Use https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/token/ERC20/CappedToken.sol instead!
