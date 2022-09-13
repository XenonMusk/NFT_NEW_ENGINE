import MyNFTAbi from './abi/myNFT.json'

export const ContractAddress = {
    myNft: '0xbb9F72193A581f97C734dad3696f0b46afE5a929',
}

export const contracts = [
    {
        name: 'MyNFT',
        abi: MyNFTAbi.abi,
        address: ContractAddress.myNft
    }
]