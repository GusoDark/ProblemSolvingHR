print("Hello Python")

unsorted = [31415926535897932384626433832795,1,3,10,3,5]

def sortBubble(unsorted):
    aux = 0
    n = len(unsorted)
    
    for i in range(n):
        for j in range(0, n-i-1):
            if unsorted[j] > unsorted[j+1]:
                aux = unsorted[j]
                unsorted[j] = unsorted[j+1]
                unsorted[j+1] = aux
    return unsorted

print(sortBubble(unsorted))

arr = [2,4,8,12,15,19,21,24,26,29]
V = 21

def introTutorial(V, arr):
    # Write your code here
    for i in range(0, len(arr)):
        if arr[i] == V:
            return i
            

print(introTutorial(V, arr))
