namespace API.Models
{
    public class ErrorMessage
    {
        public string Error;
        public string Hint;
        public ErrorMessage(int errorNumber)
        {
            this.Error = "There was a problem receiving tweets";
            if (errorNumber == 1) this.Hint = "Hint: Make sure you have the correct screen name for the account you are looking for and the account is not locked.";
            else if (errorNumber == 2) this.Hint = "Hint: You may be searching for something that doesn't exit.";
            else
                this.Hint =
                    "Hint: There is a possibility that the account you are looking for has changed their screen name or the account may be locked.";
        }
    }
}