param(
    [string]\ = \"http://localhost:3001\"
)

Write-Host \"Checking CATE API health...\"

try {
    \ = Invoke-WebRequest -Uri \"\/health\" -Method GET -TimeoutSec 5
    if (\.StatusCode -eq 200) {
        Write-Host \"✅ API is healthy\" -ForegroundColor Green
        exit 0
    } else {
        Write-Host \"❌ API returned HTTP \\" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host \"❌ API is down: \\" -ForegroundColor Red
    exit 1
}
