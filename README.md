# Airtools - zq's personal project

## Generate document (frontend)
If don't jsdoc, install js doc with `npm install -g jsdoc`
```bash
jsdoc frontend/script
```

## Deploy frontend to firebase
If don't have friebase cli yet, install first.
```bash
#firebase logout # Only when using different account 
#firebase login (zqthedesigner@gmail.com) # Only when using different account 
#firebase firebase use --add aritoools # Only when using differnt project
firebase deploy --only hosting # Deploy to firebase frontend
```