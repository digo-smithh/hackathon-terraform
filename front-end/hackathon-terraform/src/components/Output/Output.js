import './Output.css';
import { useState } from 'react';
import { CopyBlock, atomOneLight } from "react-code-blocks";

function Output() {
  const [language, changeLanguage] = useState("jsx");
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const code = 
    `resource "mgc_virtual_machine_instances" "vm_llama" {
      name = "vm-llama"
      machine_type = {
        name = "cloud-bs1.xsmall"
      }
    
      image = {
        id = mgc_virtual_machine_snapshots.meu_snapshot.id
      }
    
      network = {
        associate_public_ip = true
      }
    
      ssh_key_name = "sua_chave_ssh"
    
      block_storage = [
        {
          volume_ids = [mgc_block_storage_volumes.volume_extra.id]
        },
        {
          volume_ids = [mgc_block_storage_volumes.volume_llama.id]
        }
      ]
    
      boot_volume_id = mgc_block_storage_volumes.volume_llama.id
    }
    
    resource "mgc_block_storage_volumes" "volume_llama" {
      name = "volume-llama"
      size = 20
      type = {
        name = "cloud_nvme20k"
      }
    }`;

  return (
  
      <div className="output">
        <div>Seu arquivo .tf</div>
        <div className='codeBlockContainer'>
        <CopyBlock
          language={language}
          text={code}
          showLineNumbers={lineNumbers}
          theme={atomOneLight}
          wrapLines={true}
          className='codeBlock'
        />
        </div>
      </div>
    
  );
}

export default Output;