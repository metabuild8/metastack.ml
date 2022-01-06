use anchor_lang::prelude::*;

declare_id!("BXez9bZHqhMToYnmJoZu5miwh9wz5rWxwd5ChEhKvcF6");

#[program]
pub mod metablog {
    use super::*;
    use std::str::from_utf8;

    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        let metastack = &mut ctx.accounts.blog_account;
        metastack.authority = *ctx.accounts.authority.key;
        Ok(())
    }
    pub fn make_post(ctx: Context<MakePost>, new_post: Vec<u8>) -> ProgramResult {
        let post = from_utf8(&new_post).map_err(|err| {
            msg!("Invalid UTF-8 string, from byte {}", err.valid_up_to());
            ProgramError::InvalidInstructionData
        })?;
        msg!(post);
        let metastack = &mut ctx.accounts.blog_account;
        metastack.latest_post = new_post;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(
        init,
        payer = authority,
        space = 606 // available storage in bytes
    )]
    pub blog_account: Account<'info, BlogAccount>,
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct BlogAccount {
    pub authority: Pubkey,
    pub latest_post: Vec<u8>,
}

#[derive(Accounts)]
pub struct MakePost<'info> {
    #[account(
        mut,
        has_one = authority
    )]
    pub blog_account: Account<'info, BlogAccount>,
    pub authority: Signer<'info>,
}
