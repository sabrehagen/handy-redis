# Snapshot report for `test\generated\commands\zunionstore.test.js`

The actual snapshot is saved in `zunionstore.test.js.snap`.

Generated by [AVA](https://ava.li).

## scripts/redis-doc/commands/zunionstore.md example 1

> Snapshot 1

    [
      'await handy.zadd("zset1", [1, "one"])                                     => 1',
      'await handy.zadd("zset1", [2, "two"])                                     => 1',
      'await handy.zadd("zset2", [1, "one"])                                     => 1',
      'await handy.zadd("zset2", [2, "two"])                                     => 1',
      'await handy.zadd("zset2", [3, "three"])                                   => 1',
      'await handy.zunionstore("out", 2, "zset1", "zset2", "WEIGHTS", "2", "3")  => 3',
      'await handy.zrange("out", 0, -1, "WITHSCORES")                            => ["one","5","three","9","two","10"]',
    ]