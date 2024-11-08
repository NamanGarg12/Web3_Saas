# Web3_Saas

Learning by making projects from Harkirat Singh  
![Working](https://github.com/NamanGarg12/Web3_Saas/blob/main/Screenshot%202024-11-08%20223030.png)

This is the Diagram that is used to understand the working of the Project.

It is a SaaS application that is used to get the user suggestion for a particular image by the company and reward the user with an amount in the form of cryptocurrency.

## Letting user Upload a Photo: (Concept of Presigned URL)

Presigned URL to get the image uploaded in the AWS server:

1. **Security issue**: Never upload the image directly to the backend.
2. **Backend Approach**: Avoids allowing multiple backends, so the image should ideally go directly to the AWS cloud.
3. **Security Risks**: If we provide the AWS password in the frontend, it can lead to security and data issues in the cloud.
4. **Alternative (Not Recommended)**: Taking the image from the user in the backend and then dumping it to the AWS server—this puts too much load on the backend.
5. **Presigned URL Concept**: The frontend requests the backend to upload the image, and the backend asks the cloud to provide a URL where the user can upload the image to the AWS bucket (limited to a single photo).

## Letting User Pay and Verify Payment to the Backend: (Web2 + Web3 concept)


