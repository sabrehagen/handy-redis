# Snapshot report for `test\generated\commands\setnx.test.js`

The actual snapshot is saved in `setnx.test.js.snap`.

Generated by [AVA](https://ava.li).

## scripts/redis-doc/commands/setnx.md example 1

> Snapshot 1

    [
      'await handy.setnx("mykey", "Hello")  => 1',
      'await handy.setnx("mykey", "World")  => 0',
      'await handy.get("mykey")             => "Hello"',
    ]
