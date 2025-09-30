import AdminTemplate from "@/components/admin-template/app";

const AdminLayout = ({ children }) => {
    return (
        <AdminTemplate>
            {children}
        </AdminTemplate>
    )
}

export default AdminLayout;