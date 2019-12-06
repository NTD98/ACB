using Microsoft.EntityFrameworkCore.Migrations;

namespace myMicroservice.Migrations
{
    public partial class RemoveToken : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Token",
                table: "Accounts");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Token",
                table: "Accounts",
                nullable: true);
        }
    }
}
