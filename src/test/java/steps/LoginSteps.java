package steps;

import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.LoginPage;
import util.BrowserFactory;

public class LoginSteps extends TestBase {
	WebDriver driver;
	//BrowserFactory browserFactory;
	LoginPage loginPage ;
	
	@Before
	public void beforeRun() {
		driver = BrowserFactory.startBrowser();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
	}
	
	@Given("^a valid user$")
	public void a_valid_user() {
		
	}

	@When("^user goes to Techfios Site$")
	public void user_goes_to_Techfios_Site()  {
//		screenShot(driver, "c:\\ScreenShotFile\\LoginPage.jpg");

	}



	@Then("^Login Page should be displayed$")
	public void login_Page_should_be_displayed()  {

	}

//	@When("^user logs in with valid credentials$")
//	public void user_logs_in_with_valid_credentials()  {
//		loginPage.enterUserName("demo@techfios.com");
//		loginPage.enterPassword("abc123");
//		loginPage.clickOnSigninButton();
//	}
	
//	@When("^user logs in with valid   \"([^\"]*)\" and   \"([^\"]*)\"$")
//	public void user_logs_in_with_valid_and(String username, String password)  {
//		loginPage.login(username, password);
//	
//	}
	
	@When("^user logs in with valid   \"([^\"]*)\" and   \"([^\"]*)\"$")
	public void user_logs_in_with_valid_and(String username, String password) throws Exception{
		loginPage.login(username, password);
	}
	

	@Then("^Dashboard page should display$")
	public void dashboard_page_should_display()  {

	}


}
