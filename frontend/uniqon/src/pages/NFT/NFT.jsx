import { Button } from "@material-tailwind/react";
import axios from "axios"
import { useRef } from "react";

export function NFT() {
  const nftImg = useRef(null)

    // nft 등록
    async function nftAdd() {
        try {
        // 요청을 보낼 데이터
        const data = {
            "walletAddress": "string",
            "middleClassificationId": 0,
            "nftAddress": "string",
            "name": "string",
            "feature": "string",
            "age": 0
        };

        const formData = new FormData()
        formData.append("data", new Blob([JSON.stringify(data)], {type: "application/json"}))
        formData.append("file", nftImg.current.files[0])

        const response = await axios.post("/api/nfts/register", formData, {
            headers: {
            'Content-Type': 'multipart/form-data',  
            },
            // 파일 직접 넣기 
            file: nftImg.current.files[0],
        });

        console.log("success: ", response);
        } catch (e) {
        console.log("failed: ", e);
        }
    }

  

    // nft 조회
    async function nftInfo() {
        try {
        const response = await axios.get("/api/nfts/0")
        console.log("success: ", response);
        }catch(e) {
        console.log("failed: ", e);
        }
    }

    // nft 삭제
    async function nftDelete() {
        try {
        const response = await axios.delete("/api/nfts/0")
        console.log("success: ", response);
        }catch(e) {
        console.log("failed: ", e);
        }
    }
    

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Collections
        </p>

      <span>
        {/* NFT 등록 버튼 */}
          <Button
            className="text-3xl w-70 h-30 m-5"
            onClick={nftAdd}
            color="blue"
            >
            NFT 등록
          </Button>
          <input 
            type="file"
            ref={nftImg}
            
            />
        </span>

        {/* NFT 조회 버튼 */}
          <Button
            className="text-3xl w-70 h-30 m-5"
            onClick={nftInfo}
            color="blue"
            >
            NFT 조회
          </Button>

        {/* NFT 삭제 버튼 */}
          <Button
            className="text-3xl w-70 h-30 m-5"
            onClick={nftDelete}
            color="blue"
            >
            NFT 삭제 
          </Button>
        
        {/* </div> */}

      </header>
    </div>
  );
}