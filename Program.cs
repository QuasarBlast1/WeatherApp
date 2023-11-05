// See https://aka.ms/new-console-template for more information

class Weather
{
    int fahrenheit; int celcius;
    
    // navigator.geolocation.getCurrentPosition(displayPosition)
    string location;
    string[] sky = new string[] { "Sunny", "Cloudy" };

    // gather the data from api
    string data = "";

    static void Main(string[] args)
    {
        // Display the number of command line arguments.
        Console.WriteLine("Hello World");

        Console.WriteLine(celciusToFahren(20));
    }

    // Convert Fahrenheit to Celcius and Celcius to Fahrenheit
    public static double celciusToFahren(int c)
    {
        // (0°C × 9/5) + 32 = 32 F
        double f = (c * 9/5) + 32;
        return f;
    }
}
