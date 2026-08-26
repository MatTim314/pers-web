#software-quality #pv260
# Github analysis
- `InputTransformer`
	- line **77** - All exceptions are caught but are not propagated further, instead they are muddled into a general exception.
	- line **38** - using `instanceof` in if statements, goes against OOP principles  ❗️
	- line **29** - using @Nullable in argument decorator but immediately checking for null and throwing instead of using @NonNull ❗️
	- line **38** - not using passed in formatter when 'using' stringFormatter ❗️
	- line **20** - FORMATTED_STRING along with line **83** `store_result` and boolean argument to the constructor is a dead code with no *TODO* specified

# IDE analysis
- `TypeChecker`
	- Function `isNumber` should use early return ❗️
- `Formatter` interface contains constant values which are used only in string version. They shouldn't live in Interface.❗️
- `EmptyFormatter` is obsolete. Could be replaced with a null check on line **65** in `inputTransformer`
- Code is missing a test suite.❗️
- `inputFormatter` is not named according to Java conventions. Should be `InputFormatter`
# Sonar cube
- Sonar cube doesn't comment on using a constant in **StringFormatter** with lowercase name nor does it have a problem with it being defined elsewhere when only used here.
- I will put this emoticon `❗️` to all previous errors which SonarCube did not catch to avoid copy and paste. 