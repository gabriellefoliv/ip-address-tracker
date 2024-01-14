import './style'
import { DashContent, DashTitle, DashboardInfo, DashboardSection } from './style'

interface DashboardProps {
    ipAddress: string
    location: string
    timezone: string
    isp: string
}

function Dashboard({ipAddress, location, timezone, isp}:DashboardProps) {
    return (
        <DashboardSection>
            <DashboardInfo>
                <DashTitle>IP Address</DashTitle>
                <DashContent>{ipAddress}</DashContent>
            </DashboardInfo>
            <DashboardInfo>
                <DashTitle>Location</DashTitle>
                <DashContent>{location}</DashContent>
            </DashboardInfo>
            <DashboardInfo>
                <DashTitle>Timezone</DashTitle>
                <DashContent>{timezone}</DashContent>
            </DashboardInfo>
            <DashboardInfo>
                <DashTitle>ISP</DashTitle>
                <DashContent>{isp}</DashContent>
            </DashboardInfo>
        </DashboardSection>
    )
}

export default Dashboard