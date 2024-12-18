class MyStorage<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(item: T): void {
        this.items = this.items.filter((i) => i !== item);
    }

    getAll(): T[] {
        return this.items;
    }
}

// Example usage:
const stringStorage = new MyStorage<string>();
stringStorage.add("Apple");
stringStorage.add("Banana");
stringStorage.add("Mango");
stringStorage.remove("Apple");
console.log(stringStorage.getAll()); 

const numberStorage = new MyStorage<number>();
numberStorage.add(10);
numberStorage.add(20);
numberStorage.add(5);
numberStorage.remove(20);
console.log(numberStorage.getAll()); 
