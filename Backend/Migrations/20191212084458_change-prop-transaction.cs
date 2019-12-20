using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace myMicroservice.Migrations
{
    public partial class changeproptransaction : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Transactions",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Date",
                table: "Transactions",
                nullable: true,
                oldClrType: typeof(DateTime));
        }
    }
}
