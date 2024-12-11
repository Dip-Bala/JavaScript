# Set up github codespace 
> go to view --> Pommand Pallete
> type 'container', click on 'add codespace container' then 'modify configuartion' --> search for Nodejs
> select required NodeJs
Done!
> 
# Create a new folder in the main directory --> test.js file 
directory '/workspaces/JavaScript/basics/test.js'

# To run the file 'node basics/test.js'

# Pushing and saving the code 
The codespace is in the main branch (local) and the readme file is on remote origin/main branch. 
Steps to Sync and Merge origin/main into main

Fetch Updates from the Remote: This retrieves the latest changes from the remote repository but does not merge them yet.
git fetch origin

Merge origin/main into main: After fetching, merge the changes from origin/main into your local main branch.
git checkout main
git merge origin/main

Push Your Changes (if applicable): If you've resolved conflicts or made new commits and want to update the remote main:
git push origin main

