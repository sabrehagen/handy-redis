# Snapshot report for `test\generated\commands\pexpireat.test.js`

The actual snapshot is saved in `pexpireat.test.js.snap`.

Generated by [AVA](https://ava.li).

## scripts/redis-doc/commands/pexpireat.md example 1

> Snapshot 1

    [
      'await handy.set("mykey", "Hello")              => "typeOf => string"',
      'await handy.pexpireat("mykey", 1555555555005)  => "typeOf => number"',
      'await handy.ttl("mykey")                       => "typeOf => number"',
      'await handy.pttl("mykey")                      => "typeOf => number"',
    ]
