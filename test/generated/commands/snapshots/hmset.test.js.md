# Snapshot report for `test\generated\commands\hmset.test.js`

The actual snapshot is saved in `hmset.test.js.snap`.

Generated by [AVA](https://ava.li).

## scripts/redis-doc/commands/hmset.md example 1

> Snapshot 1

    [
      'await handy.hmset("myhash", ["field1", "Hello"], ["field2", "World"])  => "OK"',
      'await handy.hget("myhash", "field1")                                   => "Hello"',
      'await handy.hget("myhash", "field2")                                   => "World"',
    ]
