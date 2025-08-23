const formatDate = (dateString:string )=>{
     const date = new Date(dateString);
     const options={year:'numeric' as const, month:'short' as const};
     return date.toLocaleDateString('en-US',options);
}

function timeAgo(inputTime:string) {
    const now = new Date();
    const postDate = new Date(inputTime);
    const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

    if (diffInSeconds < 60) {
        return `${diffInSeconds} second${diffInSeconds !== 1 ? 's' : ''} ago`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
        return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
        return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
    }

    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`;
}

const getBase64=(file:any)=>{
    return new Promise((resolve,reject)=>{
      const reader=new FileReader();
      reader.readAsDataURL(file);
      reader.onload=()=>resolve(reader.result);
      reader.onerror=error=>reject(error);
    });

  } ;

  const formatInterviewTime=(dateStr:any)=>{
    const date = new Date(dateStr);

      return date.toLocaleString('en-US',  {
        month: "long",  
        day: "numeric", 
        year: "numeric", 
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      });
  }

  const openBase64Pdf=(base64String: string) =>{
  const byteCharacters = atob(base64String);
  const byteNumbers = new Array(byteCharacters.length)
    .fill(0)
    .map((_, i) => byteCharacters.charCodeAt(i));

  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: "application/pdf" });

  const fileURL = URL.createObjectURL(blob);
  window.open(fileURL, "_blank");
}


export {formatDate , timeAgo ,getBase64 , formatInterviewTime, openBase64Pdf};