
## Representation
Each individual (chromosome) in the population represents a potential matching solution. Matchings are stored as dictionaries where the keys and values represent one side of the matching to the other. Algorithm expects the keys to be male parts of pairs and values to be female counterparts. 
## Fitness calculations
The fitness of a chromosome is determined by the `calculate_fitness` function, which combines the costs from `calculate_happiness_cost` and `calculate_egalitarian_cost`. The happiness cost is the sum of the ranks each individual has for their partner, and the egalitarian cost measures the fairness of the matches in terms of rank difference between partners.

## Initial population generation
The `create_initial_chromosomes` function generates the initial population using the `gale_shapley` function, which appears to implement the Gale-Shapley algorithm to produce a stable matching from men's and women's preferences. This stable matching is used to initialize the population for the genetic algorithm.

## Genetic operators
- **Mutation:** The `mutate_chromosome` function modifies a given chromosome by randomly removing some matchings and then trying to restore stability by addressing unmatched or less preferred matches. This function plays a critical role in exploring the solution space.

## Selection
The algorithm selects the top half of the population based on fitness scores to form the next generation. This elitist selection ensures that the better solutions are carried over to the next generation.

## Replacement

After selection, the population is replenished by mutating the selected individuals, thus maintaining diversity.

## Parameter values
Parameters like population size and number of generations are passed to the `evolutionary_algorithm`. For example, a population size of 30 and 20 generations are used. These were used to spare computational time. For exploring the solution space to a deeper level, these parameters can be modified.


## Termination
The algorithm runs for a fixed number of generations, which is the termination condition. Additionally, there are checks to prevent infinite loops and ensure that no repeated or non-improving matchings are continuously processed. Computation of stability finding could be modified to run until finding stable configuration but since it's computationally expensive, the algorithm implemented a set number of tries.

# Solutions

## SM 
> "Number of pairs: 95    Happiness Cost: 3178    Egalitarian Cost: -2328"
- Finding new stable formations using heuristics was very difficult
- Testing correctness of stability testing function was difficult due to the nature of the problem, especially for larger data
## SMI
> "Number of pairs: 95    Happiness Cost: 2969    Egalitarian Cost: -1959
- Finding new stable formations using heuristics was very difficult
- Parsing did not require large adjustments from the SM version of the solution