package main

import (
    "fmt"
    "math/rand"
    "time"
	"runtime"
)

func generateRandomArray(size, max int) []int {
    arr := make([]int, size)
    for i := range arr {
        arr[i] = rand.Intn(max)
    }
    return arr
}

func removeWithSplice(nums []int, val int) ([]int, int) {
    k := 0
    for i := 0; i < len(nums); i++ {
        if nums[i] == val {
            nums = append(nums[:i], nums[i+1:]...)
            i--
        } else {
            k++
        }
    }
    return nums, k
}

func removeWithShifting(nums []int, val int) int {
    k := 0
    for i := 0; i < len(nums); i++ {
        if nums[i] != val {
            nums[k] = nums[i]
            k++
        }
    }
    return k
}

func main() {
    rand.Seed(time.Now().UnixNano())

    const size = 100000
    const maxValue = 9
    const valToRemove = 5

    testArray := generateRandomArray(size, maxValue)

    // Test for Splice method
    arrayForSplice := make([]int, len(testArray))
    copy(arrayForSplice, testArray)
    start := time.Now()
    arrayForSplice, _ = removeWithSplice(arrayForSplice, valToRemove)
    elapsed := time.Since(start)
    fmt.Printf("Splice method took %s\n", elapsed)
	printMemUsage()
    // Test for Shifting method
    arrayForShifting := make([]int, len(testArray))
    copy(arrayForShifting, testArray)
    start = time.Now()
    _ = removeWithShifting(arrayForShifting, valToRemove)
    elapsed = time.Since(start)
    fmt.Printf("\n Shifting method took %s\n", elapsed)
	printMemUsage()
}

func printMemUsage() {
    var m runtime.MemStats
    runtime.ReadMemStats(&m)
    fmt.Printf("Alloc = %v MiB", m.Alloc / 1024 / 1024)
    // Print other stats as needed
}