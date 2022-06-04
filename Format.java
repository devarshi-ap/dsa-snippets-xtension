import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Format {
    public static void main(String[] args) throws FileNotFoundException {
        Scanner scanner = new Scanner(new File("bin.txt"));
        while (scanner.hasNextLine()) {
            String line = scanner.nextLine();
            System.out.println("\"" + line + "\",");
        }
    }
}