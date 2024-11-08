# Web3_Saas
Learning by making projects from Harkirat Singh 
![Working](https://github.com/NamanGarg12/Web3_Saas/blob/main/Screenshot%202024-11-08%20223030.png)
This is the Diagram that is used to understand the working of the Project.
<br>
It is a Saas Application that is used to get the user suggestion for the praticular image by the compnay and reward the user with the amount in the form of Crypto.
<br>
## Letting user Upload a Photo:(Concept of Presigned URL)
PresignedUrl to get the image uploaded in the AWS server:<br>
1) Security issue, so never upload the image directly to the Backend<br>
2) Backend Approach also donot allow to have multiple backend so the image ideally must go to the AWS cloud.<br>
3) If we allow the user to upload the image directly to the server then we need to provide the AWS passowrd in the frontend than it may lead to security and data issue in the cloud.<br>
4) If not want to give password then we can take the image from the user in backend and then dump it to the AWS server.(Problem - Too much Load)<br>
5) Presigned URL concept - Fronnt end Requests to upload the image to the Backend and the Backend ask the cloud to provide the URL where the user can upload the image in the AWS bucket.(Access to only give 1 photo)<br>
<br>
## Letting User pay and Verify Payment to the Backend:(Web2 + Web3 concept)

