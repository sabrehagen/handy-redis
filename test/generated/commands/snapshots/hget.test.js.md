# Snapshot report for `test\generated\commands\hget.test.js`

The actual snapshot is saved in `hget.test.js.snap`.

Generated by [AVA](https://ava.li).

## scripts/redis-doc/commands/hget.md example 1

> Snapshot 1

    [
      'await handy.hset("myhash", "field1", "foo")  => 1',
      'await handy.hget("myhash", "field1")         => "foo"',
      'await handy.hget("myhash", "field2")         => null',
    ]
