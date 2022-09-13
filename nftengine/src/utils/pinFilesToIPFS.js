import axios from "axios";

export const PinFilesToIPFS = async (formData) => {
    try {
        const config = {
            method: 'post',
            url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2NmFiNjllOS1lZGJkLTRhNzEtODc0Ni1hMDk0YmI1NmRhOWUiLCJlbWFpbCI6Inhlbm9ubXVza0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMDM1NDM0ZTkyMGVkNjIyZjBiOWIiLCJzY29wZWRLZXlTZWNyZXQiOiJmZmIwZjk5NzdjODY2NThmNjc0MDAyZDJiYzg4NmRlMmJhNDdlNDkzYTYwMDM4MzAwZWRiYTRmMjM2YzcxMDg1IiwiaWF0IjoxNjYyMzA5ODYyfQ.DnwT2_H8MDzhrFLxHv-oNvHmLgOn2ztJAMkq6XcUzmY',
                'Content-Type': 'multipart/form-data'
            },
            data : formData
        }

      return axios(config)

    } catch (err) {
        console.log(err)
        throw err
    }
}