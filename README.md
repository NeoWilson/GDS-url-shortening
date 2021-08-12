# GDS-Tech-Assessment: URL Shortening Service

Frontend: React-Bootstrap, deployed on Vercel (Frontend core files in "my-app" directory)

Backend: Express.js, deployed on Firebase Functions (Backend core files in "functions" directory)

# Description:

Link: https://gds-url-shortening.vercel.app/

To shorten URLs:
1. Go to https://gds-url-shortening.vercel.app/
2. Enter the full URL and a selected URL slug into the input fields
3. Submit the request by clicking the 'Shorten!' button
4. Status will then displayed 1 of the following:
    - Default status will be 'Idle'
    - If the URL or URL slug exists in the database, it will display an error message to change the respective input
    - If there is no errors, it will display the newly shortened url

To use shortened URLs:
- Go to "https://asia-southeast1-gds-url-shortening.cloudfunctions.net/app/(slug)", where (slug) represents the URL slug in use for the specified URL
