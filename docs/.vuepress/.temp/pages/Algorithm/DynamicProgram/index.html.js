export const data = JSON.parse("{\"key\":\"v-7ed7b8d1\",\"path\":\"/Algorithm/DynamicProgram/\",\"title\":\"动态规划算法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"动态规划算法\",\"date\":\"2022-06-06T16:38:19.000Z\",\"permalink\":\"/Algorithm/DynamicProgram/\",\"category\":[\"算法\"],\"tag\":[\"很菜的算法\"],\"description\":\"算法认识 动态规划（Dynamic Programming）简称 DP，对于子问题重叠的情况特别有效，因为它将子问题的解保存在表格中，当需要某个子问题的解时，直接取值即可，从而避免重复计算。 动态规划算法通常用于求解具有某种最优性质的问题。在这类问题中，可能会有许多可行解。每一个解都对应于一个值，我们希望找到具有最优值的解。 动态规划算法与分治法类似，其基本思想也是将待求解问题分解成若干个子问题，先求解子问题，然后从这些子问题的解得到原问题的解。 与分治法不同的是，适合于用动态规划求解的问题，经分解得到子问题往往不是互相独立的。若用分治法来解这类问题，则分解得到的子问题数目太多，有些子问题被重复计算了很多次。如果我们能够保存已解决的子问题的答案，而在需要时再找出已求得的答案，这样就可以避免大量的重复计算，节省时间。我们可以用一个表来记录所有已解的子问题的答案。不管该子问题以后是否被用到，只要它被计算过，就将其结果填入表中。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://jin-shaohui.gitee.io/Algorithm/DynamicProgram/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"繁华中自律，落魄中自愈\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"动态规划算法\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"算法认识 动态规划（Dynamic Programming）简称 DP，对于子问题重叠的情况特别有效，因为它将子问题的解保存在表格中，当需要某个子问题的解时，直接取值即可，从而避免重复计算。 动态规划算法通常用于求解具有某种最优性质的问题。在这类问题中，可能会有许多可行解。每一个解都对应于一个值，我们希望找到具有最优值的解。 动态规划算法与分治法类似，其基本思想也是将待求解问题分解成若干个子问题，先求解子问题，然后从这些子问题的解得到原问题的解。 与分治法不同的是，适合于用动态规划求解的问题，经分解得到子问题往往不是互相独立的。若用分治法来解这类问题，则分解得到的子问题数目太多，有些子问题被重复计算了很多次。如果我们能够保存已解决的子问题的答案，而在需要时再找出已求得的答案，这样就可以避免大量的重复计算，节省时间。我们可以用一个表来记录所有已解的子问题的答案。不管该子问题以后是否被用到，只要它被计算过，就将其结果填入表中。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-02-24T09:57:32.000Z\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"很菜的算法\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-06-06T16:38:19.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-02-24T09:57:32.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"动态规划算法\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-06-06T16:38:19.000Z\\\",\\\"dateModified\\\":\\\"2023-02-24T09:57:32.000Z\\\",\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"算法认识\",\"slug\":\"算法认识\",\"link\":\"#算法认识\",\"children\":[]},{\"level\":2,\"title\":\"算法性质\",\"slug\":\"算法性质\",\"link\":\"#算法性质\",\"children\":[{\"level\":3,\"title\":\"子问题重叠\",\"slug\":\"子问题重叠\",\"link\":\"#子问题重叠\",\"children\":[]},{\"level\":3,\"title\":\"状态转移方程\",\"slug\":\"状态转移方程\",\"link\":\"#状态转移方程\",\"children\":[]},{\"level\":3,\"title\":\"最优子结构\",\"slug\":\"最优子结构\",\"link\":\"#最优子结构\",\"children\":[]},{\"level\":3,\"title\":\"无后效性\",\"slug\":\"无后效性\",\"link\":\"#无后效性\",\"children\":[]},{\"level\":3,\"title\":\"自底向上\",\"slug\":\"自底向上\",\"link\":\"#自底向上\",\"children\":[]}]},{\"level\":2,\"title\":\"步骤实战\",\"slug\":\"步骤实战\",\"link\":\"#步骤实战\",\"children\":[{\"level\":3,\"title\":\"斐波那契式子\",\"slug\":\"斐波那契式子\",\"link\":\"#斐波那契式子\",\"children\":[{\"level\":4,\"title\":\"暴力的递归算法\",\"slug\":\"暴力的递归算法\",\"link\":\"#暴力的递归算法\",\"children\":[]},{\"level\":4,\"title\":\"带备忘录的递归解法\",\"slug\":\"带备忘录的递归解法\",\"link\":\"#带备忘录的递归解法\",\"children\":[]},{\"level\":4,\"title\":\"动态规划\",\"slug\":\"动态规划\",\"link\":\"#动态规划\",\"children\":[]}]},{\"level\":3,\"title\":\"硬币凑钱\",\"slug\":\"硬币凑钱\",\"link\":\"#硬币凑钱\",\"children\":[{\"level\":4,\"title\":\"暴力的递归算法\",\"slug\":\"暴力的递归算法-1\",\"link\":\"#暴力的递归算法-1\",\"children\":[]},{\"level\":4,\"title\":\"带备忘录的递归算法\",\"slug\":\"带备忘录的递归算法\",\"link\":\"#带备忘录的递归算法\",\"children\":[]},{\"level\":4,\"title\":\"动态规划\",\"slug\":\"动态规划-1\",\"link\":\"#动态规划-1\",\"children\":[]}]}]},{\"level\":2,\"title\":\"例题实战\",\"slug\":\"例题实战\",\"link\":\"#例题实战\",\"children\":[{\"level\":3,\"title\":\"爬楼梯\",\"slug\":\"爬楼梯\",\"link\":\"#爬楼梯\",\"children\":[{\"level\":4,\"title\":\"计算步骤\",\"slug\":\"计算步骤\",\"link\":\"#计算步骤\",\"children\":[]},{\"level\":4,\"title\":\"简单动态规划\",\"slug\":\"简单动态规划\",\"link\":\"#简单动态规划\",\"children\":[]},{\"level\":4,\"title\":\"优化动态规划\",\"slug\":\"优化动态规划\",\"link\":\"#优化动态规划\",\"children\":[]}]},{\"level\":3,\"title\":\"最小路径和\",\"slug\":\"最小路径和\",\"link\":\"#最小路径和\",\"children\":[]},{\"level\":3,\"title\":\"不同路径\",\"slug\":\"不同路径\",\"link\":\"#不同路径\",\"children\":[]}]},{\"level\":2,\"title\":\"适用场景\",\"slug\":\"适用场景\",\"link\":\"#适用场景\",\"children\":[]},{\"level\":2,\"title\":\"算法局限\",\"slug\":\"算法局限\",\"link\":\"#算法局限\",\"children\":[]}],\"git\":{\"createdTime\":1677232652000,\"updatedTime\":1677232652000,\"contributors\":[{\"name\":\"shaohui_jin\",\"email\":\"1051131737@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":18.95,\"words\":5684},\"filePathRelative\":\"Algorithm/DynamicProgram.md\",\"localizedDate\":\"2022年6月7日\",\"excerpt\":\"<h2> 算法认识</h2>\\n<p>动态规划（Dynamic Programming）简称 DP，对于子问题重叠的情况特别有效，因为它将子问题的解保存在表格中，当需要某个子问题的解时，直接取值即可，从而避免重复计算。</p>\\n<p>动态规划算法通常用于求解具有某种最优性质的问题。在这类问题中，可能会有许多可行解。每一个解都对应于一个值，我们希望找到具有最优值的解。</p>\\n<p>动态规划算法与分治法类似，其基本思想也是将待求解问题分解成若干个子问题，先求解子问题，然后从这些子问题的解得到原问题的解。</p>\\n<p>与分治法不同的是，适合于用动态规划求解的问题，经分解得到子问题往往不是互相独立的。若用分治法来解这类问题，则分解得到的子问题数目太多，有些子问题被重复计算了很多次。如果我们能够保存已解决的子问题的答案，而在需要时再找出已求得的答案，这样就可以避免大量的重复计算，节省时间。我们可以用一个表来记录所有已解的子问题的答案。不管该子问题以后是否被用到，只要它被计算过，就将其结果填入表中。</p>\",\"copyright\":{\"author\":\"JSH\",\"license\":\"MIT\"},\"autoDesc\":true}")
