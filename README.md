# Dictionary Lookup Notes

## await
- await fetch(...) waits on the network.
- await response.json() waits on turning text into objects.
- await only works inside a function marked async.

## Reading nested data
- console.log One level at a time until we find what we want.
- Dot notation goes into objects. 
- Indexes [0] picks one item out of an array.

## Calling my own async function
- An async function hands back a placeholder promise, not the value.
- Promise { <pending> } in the console means we forgot await.
- await the call, and the function doing the awaiting needs async.

## Which functions need async
- A function needs async only if something inside has to wait.
- dictionaryFetch waits on the network. Needs it.
- searchClick waits on dictionaryFetch. Needs it.
- showDefinition waits on nothing. Does not need it.