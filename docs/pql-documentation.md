### Pre-conditions
- using semicollom (;) or pipeline (|) to separated query using PQL


### Step PQL
- search file from '' into test
- extract using split _event ',' a,b,c,d,e from `test` into `test2` |
- extract using formula = lowercase `${_event}` as `${_event}` from `test2` into `test3` |

<br>

**if you want run func regex:**
- extract using rex b_upper `'.*JASA'` as reg_b from `test3` into `test4` |

**Noted** : `.*` this func to remove wording.

<br>

- view b as alias_a, c as alias_b from `test4` into `view1` |

- filter on (e = 'Asset') from `view1` into `filter1` |

- drop from `filter1` |

- aggregate count(), 
    sum(e) as jumlah, 
    total by b,
`from` view1
`into` agg1 |

- store from agg1
    `into` file ''