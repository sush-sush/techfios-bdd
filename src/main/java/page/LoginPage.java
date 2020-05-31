package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	
	WebDriver driver;
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
		
	}
	@FindBy (how = How.ID ,using = "username") WebElement USERNAME ;
	@FindBy (how = How.ID ,using = "password") WebElement PASSWORD ;
	@FindBy (how = How.NAME,using = "login") WebElement SIGNIN ;

//	public void enterUserName(String username) {
//		userNameFieldLocator.sendKeys(username);
//	}
//	public void enterPassword(String password) {
//		passwordFieldLocator.sendKeys(password);
//	}
//	public void clickOnSigninButton() {
//		signinButtonLocator.click();
//	}
	public void login(String username, String password) {
		  USERNAME.sendKeys(username);
		  PASSWORD.sendKeys(password);
		  SIGNIN.click();
		 }

	
	
	
}
