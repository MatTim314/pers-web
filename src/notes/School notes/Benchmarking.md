#pv260 #software-quality #homework
# First task
- `Demo - line 20` - Computation of `allVertices()` is possibly extremely costly for larger graphs and is stored in memory all at once. It's basically an implementation without any optimization I think.
- Running the benchmark 
```
~/repos/software-quality/benchmarking-week10 git:[main]
java -jar ./target/benchmarks.jar
# JMH version: 1.37
# VM version: JDK 24-ea, OpenJDK 64-Bit Server VM, 24-ea+16-Ubuntu-1
# VM invoker: /usr/lib/jvm/java-24-openjdk-amd64/bin/java
# VM options: <none>
# Blackhole mode: compiler (auto-detected, use -Djmh.blackhole.autoDetect=false to disable)
# Warmup: 2 iterations, 10 s each
# Measurement: 2 iterations, 10 s each
# Timeout: 10 min per iteration
# Threads: 1 thread, will synchronize iterations
# Benchmark mode: Throughput, ops/time
# Benchmark: cz.muni.fi.pv260.NaiveBench.trivialAllConnected


# Run progress: 0.00% complete, ETA 00:01:20
# Fork: 1 of 1
# Warmup Iteration   1: 16.524 ops/s
# Warmup Iteration   2: 17.851 ops/s
Iteration   1: 17.386 ops/s
Iteration   2: 17.639 ops/s


Result "cz.muni.fi.pv260.NaiveBench.trivialAllConnected":
  17.512 ops/s


# JMH version: 1.37
# VM version: JDK 24-ea, OpenJDK 64-Bit Server VM, 24-ea+16-Ubuntu-1
# VM invoker: /usr/lib/jvm/java-24-openjdk-amd64/bin/java
# VM options: <none>
# Blackhole mode: compiler (auto-detected, use -Djmh.blackhole.autoDetect=false to disable)
# Warmup: 2 iterations, 10 s each
# Measurement: 2 iterations, 10 s each
# Timeout: 10 min per iteration
# Threads: 1 thread, will synchronize iterations
# Benchmark mode: Throughput, ops/time
# Benchmark: cz.muni.fi.pv260.NaiveBench.trivialAllDisjoint

# Run progress: 50.00% complete, ETA 00:00:40
# Fork: 1 of 1
# Warmup Iteration   1: 59.275 ops/s
# Warmup Iteration   2: 60.809 ops/s
Iteration   1: 55.050 ops/s
Iteration   2: 55.081 ops/s


Result "cz.muni.fi.pv260.NaiveBench.trivialAllDisjoint":
  55.066 ops/s


# Run complete. Total time: 00:01:20

REMEMBER: The numbers below are just data. To gain reusable insights, you need to follow up on
why the numbers are the way they are. Use profilers (see -prof, -lprof), design factorial
experiments, perform baseline and negative tests that provide experimental control, make sure
the benchmarking environment is safe on JVM/OS/HW level, ask for reviews from the domain experts.
Do not assume the numbers tell you what you want them to tell.

NOTE: Current JVM experimentally supports Compiler Blackholes, and they are in use. Please exercise
extra caution when trusting the results, look into the generated code to check the benchmark still
works, and factor in a small probability of new VM bugs. Additionally, while comparisons between
different JVMs are already problematic, the performance difference caused by different Blackhole
modes can be very significant. Please make sure you use the consistent Blackhole mode for comparisons.

Benchmark                        Mode  Cnt   Score   Error  Units
NaiveBench.trivialAllConnected  thrpt    2  17.512          ops/s
NaiveBench.trivialAllDisjoint   thrpt    2  55.066          ops/s
```

# Second task
As expected, most of the memory and processing time is spent on `stronglyConnected()` function.
![[Pasted image 20250424200747.png]]
![[Pasted image 20250424201847.png]]

# Third task

After implementing caching for parsedExpressions instead of parsing them again and again we see massive boost the the performance and to the allocated memory.
```
  private final Map<String, Expression> parsedExpressions = new HashMap<>();
```
![[Pasted image 20250424201701.png]]
![[Pasted image 20250424201743.png]]