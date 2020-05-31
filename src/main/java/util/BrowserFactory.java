package util;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

public class BrowserFactory {

	static WebDriver driver;

	

	 public static WebDriver startBrowser() {
	  // Set Chrome Driver Properties
	  //System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
		WebDriverManager.chromedriver().setup();

	  // Create ChromeDriver object and launch chrome browser
	  WebDriver driver = new ChromeDriver();
	  driver.get("http://techfios.com/test/billing/?ng=admin/");
	  // return the driver to the test class
	  return driver;
	 }

}
