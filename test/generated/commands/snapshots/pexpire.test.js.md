# Snapshot report for `test\generated\commands\pexpire.test.js`

The actual snapshot is saved in `pexpire.test.js.snap`.

Generated by [AVA](https://ava.li).

## scripts/redis-doc/commands/pexpire.md example 1

> Snapshot 1

    [
      'await handy.set("mykey", "Hello")   => "OK"',
      'await handy.pexpire("mykey", 1500)  => "[a number]"',
      'await handy.ttl("mykey")            => "[a number]"',
      'await handy.pttl("mykey")           => "[a number]"',
    ]
