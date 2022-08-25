# Programming Language Suggestor 

#### By Samuel Majerus

#### User completes a 5-question quiz before program displays the Programming Language (ProgLang) suggested for them. 

## Technologies Used

* HTML
* JavaScript
* CSS
* MarkDown (for this README) 
* Git Bash (for navigating local directories, interacting with remote GitHub repo)

## Description
The user answers 5 questions, and clicks the submit button. What happens between their answers being submitted and the ProgLang suggestion being displayed? I'll explain that now. 



## Setup/Installation Requirements

* To Clone the program from GitHub to your local machine: 
  * 1.)    Click the green button labelled 'Code'. Under the 'HTTPS' tab, there are 3 Options. If you know how to use Git in command line and have Git BASH installed, move on to Step 2a.    Otherwise, I recommend Option 3, where it says 'Download ZIP'. (move on to Step 2b).  
  * 2.)
    * a.)   If you selected Option 1:   Copy the link. Then, in Git BASH, navigate to the folder you want to put the files in. This can be your Desktop directory, or a different subfolder, whatever you prefer. Next, still in the Git BASH console, type the following (with the copied-link in place of 'HTTPS') and hit ENTER:  
    'git clone HTTPS' 
    Several lines of text will come up in the console -- that's the files being copied into whichever directory/folder you're in currently.  Then, do the following once your prompt line reappears:   While still in the console window, type 'pwd' and press ENTER.  This will display your current file path. Copy that by highlighting it and pressing 'Ctrl-C', and then pasting it in an easily-accessible word processor like Notepad for reference.    
    Next, open File Explorer, and navigate to through your files according to that File Path you just copy-pasted for reference.  Once you've done this, move on to Step 3. 
    
    * 2b.)  Once the '.zip' file is downloaded, unzip and open the folder.  Next, move on to Step 3.

  * 3.)  Before opening the HTML file, do the following:   right-click the containing folder (in which the newly-copied files are stored)  and select the option that says 'Pin to Quick Access'. That way, if the tab is accidentally closed for whatever reason and you want to reopen it, the folder can be accessed again in one step.  
  Move on to Step 4. 
  
  * 4.)  To open the webpage, double-click the file named  'pLangQz.html'. The webpage will then be opened in a new browser tab.  Everything else after that should be self-explanatory. 
* IMPORTANT:  the webpage's interactive features will not work if the files' containing folder doesn't look something like this  (names with a '/' are folders):  
'README.md'   'pLangQz.html'    'css/'    'js/'


## Known Bugs

* The points system for the four language-suggestion options is rudimentary to say the least, since I came up with it on the fly and only cared about the program being functional in some sense of the word.  (I didn't have time to do thorough testing and make tweaks wherever they were needed, hence why demonstrating that the basic system worked was my main concern.)
As a result, it's entirely possible that Javascript will be suggested to the user most of the time, especially since the answer-processing system's second-stage is biased towards JavaScript to some degree. It's also possible for the other 3 respective languages to be suggested in some cases as well --  at the end of the day, it really just depends on which answer combination is chosen by the user. 

## License

Email me at ladolego@gmail.com for questions, ideas, concerns, or even any issues that you run into.  You may also clone or Fork the content in this Repo to fiddle around with it, if you like. 

Licensed through MIT. Copyright (c)  8-12-2022, Samuel Majerus. 