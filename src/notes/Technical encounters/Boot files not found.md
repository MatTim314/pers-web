#tech-problems #linux
## Solution
[](https://askubuntu.com/posts/1356549/timeline)

"As the error states, you are missing grubx64.efi in the UEFI directory EFI/ubuntu. How that happened is anyone's guess, since a bad install would not have been working for months.

To fix, just copy grubx64.efi to the EFI/ubuntu directory. Your install media should have a copy. from the install media, you can mount the UEFI partition, say at /mnt, so the copy target would look like /mnt/EFI/ubuntu/grub.x64.efi (caps matter, make the target match what is actually there).

Your UEFI partition (ESP) is on nme0n1p1, from the running install media, mount it at /mnt:

```
sudo mount -tvfat /dev/nvme0n1p1 /mnt
```

You should now see the location you need to put the grubx64.efi file in /mnt/efi/ubuntu. Take a look with ls, you should have shimx64.efi and grub.cfg there already according to your boot-repair report.

Copy grubx64.efi to that location. The install media should have a copy of grubx64.efi in /EFI/boot/grubx64.efi, so the command is:

```
sudo cp /EFI/boot/grubx64.efi /mnt/efi/ubuntu 
```

Unmount the /mnt, remove the install media, and reboot. With grubx64.efi present in the same directory as shimx64.efi, the grub UEFI boot should work."

## Cause
Unknown. Generally accepted as an issue caused by dual-boot between Windows and Linux. 
## Description
On dual boot system (Windows & Ubuntu) boot files for linux suddenly dissaper from the right directory. Bootloader is then unable to find them and correctly start the system. The solution is to run Ubuntu from Live media and copy the boot files into the original system. 