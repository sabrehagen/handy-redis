# Snapshot report for `test\generated\commands\msetnx.test.js`

The actual snapshot is saved in `msetnx.test.js.snap`.

Generated by [AVA](https://ava.li).

## scripts/redis-doc/commands/msetnx.md example 1

> Snapshot 1

    [
      'await handy.msetnx(["key1", "Hello"], ["key2", "there"])  => 1',
      'await handy.msetnx(["key2", "there"], ["key3", "world"])  => 0',
      'await handy.mget("key1", "key2", "key3")                  => ["Hello","there",null]',
    ]
