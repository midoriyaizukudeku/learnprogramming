
function js() {
    document.getElementById('showcontent').innerHTML = `
    
      <h1>Top 10 JavaScript Concepts with Code Examples</h1>
    
    <div class="concept-list">
        <!-- Concept 1: Variables -->
        <div class="concept">
            <h2>1. Variables</h2>
            <pre><code class="language-javascript">
let name = "Alice";  // Declare a variable using 'let'
const age = 25;  // Declare a constant using 'const'
var isActive = true;  // Declare a variable using 'var'

console.log(name);  // Output: Alice
console.log(age);  // Output: 25
console.log(isActive);  // Output: true
            </code></pre>
        </div>

        <!-- Concept 2: Functions -->
        <div class="concept">
            <h2>2. Functions</h2>
            <pre><code class="language-javascript">
function greet(name) {
    console.log("Hello, " + name);
}

greet("Bob");  // Output: Hello, Bob
            </code></pre>
        </div>

        <!-- Concept 3: Conditionals -->
        <div class="concept">
            <h2>3. Conditionals (if-else)</h2>
            <pre><code class="language-javascript">
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
// Output: You are an adult.
            </code></pre>
        </div>

        <!-- Concept 4: Loops (For Loop) -->
        <div class="concept">
            <h2>4. Loops (For Loop)</h2>
            <pre><code class="language-javascript">
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4
            </code></pre>
        </div>

        <!-- Concept 5: Arrays -->
        <div class="concept">
            <h2>5. Arrays</h2>
            <pre><code class="language-javascript">
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);  // Output: 1
console.log(numbers.length);  // Output: 5
            </code></pre>
        </div>

        <!-- Concept 6: Objects -->
        <div class="concept">
            <h2>6. Objects</h2>
            <pre><code class="language-javascript">
let person = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet();  // Output: Hello, Alice
            </code></pre>
        </div>

        <!-- Concept 7: Arrow Functions -->
        <div class="concept">
            <h2>7. Arrow Functions</h2>
            <pre><code class="language-javascript">
let sum = (a, b) => a + b;
console.log(sum(3, 5));  // Output: 8
            </code></pre>
        </div>

        <!-- Concept 8: Events -->
        <div class="concept">
            <h2>8. Events (Event Listeners)</h2>
            <pre><code class="language-javascript">
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
// You would need an HTML button element with id="myButton" to test this code.
            </code></pre>
        </div>

        <!-- Concept 9: DOM Manipulation -->
        <div class="concept">
            <h2>9. DOM Manipulation</h2>
            <pre><code class="language-javascript">
let div = document.createElement("div");
div.textContent = "This is a new div!";
document.body.appendChild(div);
            </code></pre>
        </div>

        <!-- Concept 10: Error Handling (try-catch) -->
        <div class="concept">
            <h2>10. Error Handling (try-catch)</h2>
            <pre><code class="language-javascript">
try {
    let x = y + 1;  // y is not defined, will throw an error
} catch (error) {
    console.log("An error occurred: " + error.message);
}
// Output: An error occurred: y is not defined
            </code></pre>
        </div>
    </div>

    `;
}



function py() {
    document.getElementById('showcontent').innerHTML = `
         <h1>Top 10 Python Concepts with Code Examples</h1>

    <div class="concept-list">
        <!-- Concept 1: Variables -->
        <div class="concept">
            <h2>1. Variables</h2>
            <pre><code>
name = "Alice"  # String variable
age = 25  # Integer variable
height = 5.5  # Float variable
is_active = True  # Boolean variable

print(name)
print(age)
print(height)
print(is_active)
            </code></pre>
        </div>

        <!-- Concept 2: Functions -->
        <div class="concept">
            <h2>2. Functions</h2>
            <pre><code>
def greet(name):
    print(f"Hello, {name}")

greet("Bob")  # Calling the function
            </code></pre>
        </div>

        <!-- Concept 3: Conditionals -->
        <div class="concept">
            <h2>3. Conditionals (if-else)</h2>
            <pre><code>
age = 18

if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")
            </code></pre>
        </div>

        <!-- Concept 4: Loops (For Loop) -->
        <div class="concept">
            <h2>4. Loops (For Loop)</h2>
            <pre><code>
for i in range(5):
    print(i)  # Prints 0 to 4
            </code></pre>
        </div>

        <!-- Concept 5: Lists -->
        <div class="concept">
            <h2>5. Lists</h2>
            <pre><code>
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Output: apple
print(len(fruits))  # Output: 3
            </code></pre>
        </div>

        <!-- Concept 6: Dictionaries -->
        <div class="concept">
            <h2>6. Dictionaries</h2>
            <pre><code>
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

print(person["name"])  # Output: Alice
print(person["age"])  # Output: 25
            </code></pre>
        </div>

        <!-- Concept 7: Lambda Functions -->
        <div class="concept">
            <h2>7. Lambda Functions</h2>
            <pre><code>
add = lambda x, y: x + y
print(add(5, 3))  # Output: 8
            </code></pre>
        </div>

        <!-- Concept 8: List Comprehension -->
        <div class="concept">
            <h2>8. List Comprehension</h2>
            <pre><code>
squares = [x**2 for x in range(5)]
print(squares)  # Output: [0, 1, 4, 9, 16]
            </code></pre>
        </div>

        <!-- Concept 9: File I/O -->
        <div class="concept">
            <h2>9. File I/O</h2>
            <pre><code>
# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, Python File I/O!")

# Reading from a file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)  # Output: Hello, Python File I/O!
            </code></pre>
        </div>

        <!-- Concept 10: Error Handling (try-except) -->
        <div class="concept">
            <h2>10. Error Handling (try-except)</h2>
            <pre><code>
try:
    result = 10 / 0  # Division by zero will cause an error
except ZeroDivisionError as e:
    print(f"Error: {e}")  # Output: Error: division by zero
            </code></pre>
        </div>

    </div>

    `;
}

function java() {
    document.getElementById('showcontent').innerHTML = `
          <h1>Top 10 Java Concepts with Code Examples</h1>

    <div class="concept-list">
        <!-- Concept 1: Variables -->
        <div class="concept">
            <h2>1. Variables</h2>
            <pre><code class="language-java">
public class Main {
    public static void main(String[] args) {
        int num = 10; // Integer variable
        double price = 19.99; // Double variable
        char grade = 'A'; // Character variable
        boolean isActive = true; // Boolean variable

        System.out.println(num);
        System.out.println(price);
        System.out.println(grade);
        System.out.println(isActive);
    }
}
            </code></pre>
        </div>

        <!-- Concept 2: Functions -->
        <div class="concept">
            <h2>2. Functions</h2>
            <pre><code class="language-java">
public class Main {
    public static void main(String[] args) {
        greet("Alice"); // Calling function
    }

    public static void greet(String name) {
        System.out.println("Hello, " + name);
    }
}
            </code></pre>
        </div>

        <!-- Concept 3: Conditionals -->
        <div class="concept">
            <h2>3. Conditionals (if-else)</h2>
            <pre><code class="language-java">
public class Main {
    public static void main(String[] args) {
        int age = 20;

        if (age >= 18) {
            System.out.println("You are an adult.");
        } else {
            System.out.println("You are a minor.");
        }
    }
}
            </code></pre>
        </div>

        <!-- Concept 4: Loops (For Loop) -->
        <div class="concept">
            <h2>4. Loops (For Loop)</h2>
            <pre><code class="language-java">
public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            System.out.println(i); // Prints 0 to 4
        }
    }
}
            </code></pre>
        </div>

        <!-- Concept 5: Arrays -->
        <div class="concept">
            <h2>5. Arrays</h2>
            <pre><code class="language-java">
public class Main {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5}; // Array of integers

        System.out.println(numbers[0]); // Output: 1
        System.out.println(numbers.length); // Output: 5
    }
}
            </code></pre>
        </div>

        <!-- Concept 6: Switch Statements -->
        <div class="concept">
            <h2>6. Switch Statements</h2>
            <pre><code class="language-java">
public class Main {
    public static void main(String[] args) {
        int day = 3;
        String dayName;

        switch (day) {
            case 1: dayName = "Monday"; break;
            case 2: dayName = "Tuesday"; break;
            case 3: dayName = "Wednesday"; break;
            default: dayName = "Invalid day"; break;
        }

        System.out.println(dayName);
    }
}
            </code></pre>
        </div>

        <!-- Concept 7: Object-Oriented Principles -->
        <div class="concept">
            <h2>7. Object-Oriented Principles (Methods and Attributes)</h2>
            <pre><code class="language-java">
public class Main {
    public static void main(String[] args) {
        Person person = new Person("Alice", 25);
        person.introduce();
    }
}

class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void introduce() {
        System.out.println("Hi, I am " + name + " and I am " + age + " years old.");
    }
}
            </code></pre>
        </div>

        <!-- Concept 8: Constructor -->
        <div class="concept">
            <h2>8. Constructor</h2>
            <pre><code class="language-java">
public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Toyota", 2020);
        myCar.display();
    }
}

class Car {
    String brand;
    int year;

    // Constructor
    Car(String b, int y) {
        brand = b;
        year = y;
    }

    void display() {
        System.out.println("Brand: " + brand + ", Year: " + year);
    }
}
            </code></pre>
        </div>

        <!-- Concept 9: ArrayList (Dynamic Arrays) -->
        <div class="concept">
            <h2>9. ArrayList (Dynamic Arrays)</h2>
            <pre><code class="language-java">
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");

        System.out.println(list);  // Output: [Apple, Banana, Cherry]
    }
}
            </code></pre>
        </div>

        <!-- Concept 10: File I/O -->
        <div class="concept">
            <h2>10. File I/O</h2>
            <pre><code class="language-java">
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try {
            File file = new File("example.txt");
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            } else {
                System.out.println("File already exists.");
            }

            FileWriter writer = new FileWriter("example.txt");
            writer.write("Hello, Java File I/O!");
            writer.close();
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
            </code></pre>
        </div>

    </div>
    `;
}

function cpp() {
    document.getElementById('showcontent').innerHTML = `
          <h1>Top 10 C++ Concepts with Code Examples</h1>
    
    <div class="concept-list">
        <div class="concept">
            <h2>1. Variables and Data Types</h2>
            <pre><code class="language-cpp">
#include <iostream>
using namespace std;

int main() {
    int age = 30;  // Integer Variable
    double height = 5.9;  // Double Variable
    char grade = 'A';  // Character Variable
    bool isStudent = true;  // Boolean Variable
    
    cout << "Age: " << age << ", Height: " << height << ", Grade: " << grade << ", Is Student: " << isStudent << endl;
    return 0;
}
            </code></pre>
        </div>

        <div class="concept">
            <h2>2. Functions</h2>
            <pre><code class="language-cpp">
#include <iostream>
using namespace std;

void greet(string name) {
    cout << "Hello, " << name << endl;
}

int main() {
    greet("Alice");  // Calling Function
    return 0;
}
            </code></pre>
        </div>

        <div class="concept">
            <h2>3. Loops (For Loop)</h2>
            <pre><code class="language-cpp">
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        cout << "Iteration: " << i << endl;
    }
    return 0;
}
            </code></pre>
        </div>

        <div class="concept">
            <h2>4. Conditionals (if-else)</h2>
            <pre><code class="language-cpp">
#include <iostream>
using namespace std;

int main() {
    int age = 20;
    
    if (age >= 18) {
        cout << "You are an adult." << endl;
    } else {
        cout << "You are a minor." << endl;
    }
    
    return 0;
}
            </code></pre>
        </div>

        <div class="concept">
            <h2>5. Arrays</h2>
            <pre><code class="language-cpp">
#include <iostream>
using namespace std;

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    
    for (int i = 0; i < 5; i++) {
        cout << "Number " << i + 1 << ": " << numbers[i] << endl;
    }
    
    return 0;
}
            </code></pre>
        </div>

        <div class="concept">
            <h2>6. Pointers</h2>
            <pre><code class="language-cpp">
#include <iostream>
using namespace std;

int main() {
    int num = 5;
    int* ptr = &num;  // Pointer to num
    
    cout << "Value of num: " << num << endl;
    cout << "Address of num: " << &num << endl;
    cout << "Value via pointer: " << *ptr << endl;
    
    return 0;
}
            </code></pre>
        </div>

        <div class="concept">
            <h2>7. Classes and Objects (OOP)</h2>
            <pre><code class="language-cpp">
#include <iostream>
using namespace std;

class Dog {
public:
    string name;
    
    void bark() {
        cout << name << " says Woof!" << endl;
    }
};

int main() {
    Dog myDog;  // Create an object of the class
    myDog.name = "Buddy";  // Set property
    myDog.bark();  // Call method
    
    return 0;
}
            </code></pre>
        </div>

        <div class="concept">
            <h2>8. Constructors</h2>
            <pre><code class="language-cpp">
#include <iostream>
using namespace std;

class Car {
public:
    string brand;
    int year;

    // Constructor to initialize the object
    Car(string b, int y) {
        brand = b;
        year = y;
    }
    
    void display() {
        cout << "Brand: " << brand << ", Year: " << year << endl;
    }
};

int main() {
    Car myCar("Toyota", 2020);  // Object with constructor
    myCar.display();  // Display the details
    
    return 0;
}
            </code></pre>
        </div>

        <div class="concept">
            <h2>9. Inheritance</h2>
            <pre><code class="language-cpp">
#include <iostream>
using namespace std;

class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Woof!" << endl;
    }
};

int main() {
    Dog myDog;
    myDog.eat();  // Inherited method
    myDog.bark();  // Dog-specific method
    
    return 0;
}
            </code></pre>
        </div>

        <div class="concept">
            <h2>10. File Handling (Reading and Writing)</h2>
            <pre><code class="language-cpp">
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream outFile("example.txt");  // Create and write to file
    outFile << "Hello, C++ File Handling!" << endl;
    outFile.close();
    
    string line;
    ifstream inFile("example.txt");  // Read from file
    while (getline(inFile, line)) {
        cout << line << endl;
    }
    inFile.close();
    
    return 0;
}
    `;
}
